using CRMApp.Models.ECommerce;

namespace CRMApp.ECommerce
{
    public interface IECommerceService
    {
        Task<List<RevenueType>> GetRevenueList();
    }
}
