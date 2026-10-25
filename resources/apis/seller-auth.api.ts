import { apiClient } from './client';

export interface SellerStoreInfo {
  id: string;
  name: string;
  status: 'PENDING' | 'UNDER_REVIEW' | 'APPROVED' | 'ACTIVE' | 'SUSPENDED' | 'REJECTED';
}

export interface SellerUserInfo {
  id: string;
  name: string;
  email: string;
}

export interface SellerLoginResponse {
  accessToken: string;
  refreshToken: string;
  user: SellerUserInfo;
  store: SellerStoreInfo;
}

export interface SellerSignupResponse {
  message: string;
  store: SellerStoreInfo;
  user: SellerUserInfo;
}

export interface SellerProfileResponse {
  user: SellerUserInfo;
  store: SellerStoreInfo;
  role: string;
  permissions: string[];
}

export interface SellerLoginPayload {
  email: string;
  password: string;
}

export interface SellerSignupPayload {
  storeName: string;
  legalBusinessName: string;
  businessAddress: string;
  contactName: string;
  email: string;
  phone: string;
  password: string;
  businessId: string;
  vatId?: string;
  sellerAgreementAccepted: boolean;
}

export const sellerAuthApi = {
  /**
   * Seller / Store Admin Login
   */
  async login(payload: SellerLoginPayload): Promise<SellerLoginResponse> {
    return apiClient<SellerLoginResponse>('/store-auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  /**
   * Seller / Store Application Signup
   */
  async signup(payload: SellerSignupPayload): Promise<SellerSignupResponse> {
    return apiClient<SellerSignupResponse>('/store-auth/signup', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  /**
   * Fetch authenticated store admin profile
   */
  async getProfile(tokenOverride?: string): Promise<SellerProfileResponse> {
    const token =
      tokenOverride ||
      (typeof window !== 'undefined' ? localStorage.getItem('nordic_seller_token') : null);

    return apiClient<SellerProfileResponse>('/store-auth/me', {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      cache: 'no-store',
    });
  },

  /**
   * Refresh seller authentication session (7 days)
   */
  async refresh(refreshToken: string): Promise<SellerLoginResponse> {
    return apiClient<SellerLoginResponse>('/store-auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken }),
    });
  },

  /**
   * Request password reset instructions
   */
  async forgotPassword(email: string): Promise<{ message: string; resetToken?: string }> {
    return apiClient<{ message: string; resetToken?: string }>('/store-auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  /**
   * Reset password with token
   */
  async resetPassword(token: string, newPassword: string): Promise<{ message: string }> {
    return apiClient<{ message: string }>('/store-auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, newPassword }),
    });
  },
};
