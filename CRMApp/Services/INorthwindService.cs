using CRMApp.Models.Northwind;

namespace CRMApp.Northwind
{
    public interface INorthwindService
    {
        Task<List<CustomersType>> GetCustomers();
    }
}
