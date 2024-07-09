using CRMApp.Models.CRMAppData;

namespace CRMApp.CRMAppData
{
    public interface ICRMAppDataService
    {
        Task<List<MeetingsTasksType>> GetMeetingsTasksList();
    }
}
