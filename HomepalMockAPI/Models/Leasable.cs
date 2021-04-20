namespace HomepalMockAPI.Models
{
    public class Leasable
    {
        public int id { get; set; }
        public string class_descriptor { get; set; }
        public int price { get; set; }
        public string description { get; set; }
        public int size { get; set; }
        public int customer_id { get; set; }
        public int owner_id { get; set; }
        public int building_id { get; set; }

    }
}