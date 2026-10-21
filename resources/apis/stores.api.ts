import { apiClient } from './client';
import { productsApi, type MarketplaceProductsResponse } from './products.api';
import type { Store } from '../interfaces/store.interface';
import type { ProductFilterParams } from '../interfaces/product.interface';

/**
 * Stores (Sellers / Tenants) API Client.
 *
 * Current Backend Status:
 * - Public marketplace products by store: GET /marketplace?storeId={storeId}
 * - Direct public store profile endpoint (GET /marketplace/stores/:id) is not yet exposed by the core backend.
 * - This client provides unified store operations, querying product catalog metadata
 *   where store details are hydrated, and documents the required public store endpoint.
 */
export const storesApi = {
  /**
   * Fetches published products for a specific store from the public marketplace.
   */
  async getStoreProducts(
    storeId: string,
    params?: Omit<ProductFilterParams, 'storeId'>
  ): Promise<MarketplaceProductsResponse> {
    return productsApi.getMarketplace({
      ...params,
      storeId,
    });
  },

  /**
   * Attempts to fetch a store directly from the backend.
   * If a dedicated public endpoint becomes available in a future phase, it will resolve here.
   */
  async getStore(storeId: string): Promise<Store | null> {
    try {
      return await apiClient<Store>(`/marketplace/stores/${storeId}`, {
        next: { revalidate: 60 },
      });
    } catch {
      // Backend does not currently provide public /marketplace/stores/:id endpoint.
      return null;
    }
  },
};
