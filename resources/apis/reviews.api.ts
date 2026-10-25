import { apiClient } from './client';
import type { ProductReviewSummary } from '../interfaces/review.interface';

/**
 * Public marketplace reviews API client.
 * Calls backend /marketplace/products/:productId/reviews endpoint.
 */
export const reviewsApi = {
  async getProductReviews(
    productId: string,
    page = 1,
    limit = 10
  ): Promise<ProductReviewSummary> {
    return apiClient<ProductReviewSummary>(
      `/marketplace/products/${productId}/reviews`,
      {
        params: { page, limit },
        next: { revalidate: 60 },
      }
    );
  },
};
