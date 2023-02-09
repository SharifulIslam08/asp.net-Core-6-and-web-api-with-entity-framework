namespace OrdersAPI.Models
{
    public class AddOrderRequest
    {
        public string customerid { get; set; }
        public string customer_name { get; set; }
        public string item_id { get; set; }
        public string quantity { get; set; }
        public string rate { get; set; }
        public string mode_of_transport { get; set; }
        public string destination_country { get; set; }
        public string production_start_date { get; set; }
        public string production_end_date { get; set; }
        public string delivery_date { get; set; }
        public string a_delivery_date { get; set; }
        public string order_staus { get; set; }
        public string penalty { get; set; }
    }
}
 