namespace HomepalMockAPI.Models
{
    public class Building
    {
        public int BuildingId { get; set; }
        public string BuildingClass { get; set; }
        public string BuildingStreetName { get; set; }
        public string BuildingStreetNumber { get; set; }
        public string BuildingPostalCode { get; set; }
        public int RealEstateId { get; set; }

    }
}