using CRMApp.Models.ECommerce;

namespace CRMApp.ECommerce
{
    public class MockECommerceService : IECommerceService
    {
        public Task<List<RevenueType>> GetRevenueList()
        {
            return Task.FromResult<List<RevenueType>>(new());
        }
    }
}
