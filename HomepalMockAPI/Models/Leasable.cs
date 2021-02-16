namespace HomepalMockAPI.Models
{
    public class Leasable
    {
        public int LeasableId { get; set; }
        public string LeasableClass { get; set; }
        public int LeasablePrice { get; set; }
        public string LeasableDescription { get; set; }
        public string LeasableSize { get; set; }
        public int CustomerId { get; set; }
        public int OwnerId { get; set; }
        public int BuildingId { get; set; }

    }
}