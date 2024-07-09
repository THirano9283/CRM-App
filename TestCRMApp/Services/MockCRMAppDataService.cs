using CRMApp.Models.CRMAppData;

namespace CRMApp.CRMAppData
{
    public class MockCRMAppDataService : ICRMAppDataService
    {
        public Task<List<MeetingsTasksType>> GetMeetingsTasksList()
        {
            return Task.FromResult<List<MeetingsTasksType>>(new());
        }
    }
}
