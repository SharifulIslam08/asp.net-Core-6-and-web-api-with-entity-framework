using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrdersAPI.Data;
using OrdersAPI.Models;
using ProductsAPI.Models;

namespace OrdersAPI.Controllers
{
    [ApiController]          //anotating API controller
                             // [Route("api/orders")] //Route to the controller
    [Route("api/[controller]")] //another way of routing to the controller

    public class OrdersController : Controller
    {
        private readonly OrdersAPIDbContext dbContext;

        //ctor => contructor shortcut
        public OrdersController(OrdersAPIDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        //======== Get ========
        [HttpGet] //annotating http get request , as swagger is an open api doccumentation
        public async Task<IActionResult> GetOrders()
        {
            return Ok(await dbContext.Orders.ToListAsync()); //ok statement is giving it a 200 response as this is a resful API

        }

        //============ GEt single data ============
        [HttpGet]
        [Route("{orderid:guid}")]
        public async Task<IActionResult> GetOrder([FromRoute] Guid orderid)
        {
            var order = await dbContext.Orders.FindAsync(orderid);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }

        // ========== Post =========
        [HttpPost]
        public async Task<IActionResult> AddOrder(AddOrderRequest addOrderRequest)  //Task<> is used because of async mehtod
        {
            var order = new Order()
            {
                orderid = Guid.NewGuid(),
                customerid =  addOrderRequest.customerid,
                customer_name = addOrderRequest.customer_name,
                item_id = addOrderRequest.item_id,
                quantity = addOrderRequest.quantity,
                rate = addOrderRequest.rate,
                mode_of_transport = addOrderRequest.mode_of_transport,
                destination_country = addOrderRequest.destination_country,
                production_start_date = addOrderRequest.production_start_date,
                production_end_date = addOrderRequest.production_end_date,
                delivery_date = addOrderRequest.delivery_date,
                a_delivery_date = addOrderRequest.a_delivery_date,
                order_staus = addOrderRequest.order_staus,
                penalty = addOrderRequest.penalty,

            };
            await dbContext.Orders.AddAsync(order);
            await dbContext.SaveChangesAsync();
            return Ok(order);
        }

        // ======= Update ========
        [HttpPut]
        [Route("{orderid:guid}")]
        public async Task<IActionResult> UpdateOrder([FromRoute] Guid orderid, UpdateOrderRequest updateOrderRequest)
        {
           var order = await dbContext.Orders.FindAsync(orderid);
            if (order != null)
            {
                order.customerid = updateOrderRequest.customerid;
                order.customer_name = updateOrderRequest.customer_name;
                order.item_id = updateOrderRequest.item_id;
                order.quantity = updateOrderRequest.quantity;
                order.rate = updateOrderRequest.rate;
                order.mode_of_transport = updateOrderRequest.mode_of_transport;
                order.destination_country = updateOrderRequest.destination_country;
                order.production_start_date = updateOrderRequest.production_start_date;
                order.production_end_date = updateOrderRequest.production_end_date;
                order.delivery_date = updateOrderRequest.delivery_date;
                order.a_delivery_date = updateOrderRequest.a_delivery_date;
                order.penalty = updateOrderRequest.penalty;

                await dbContext.SaveChangesAsync();
              
                return Ok(order);
            }
            return NotFound();
        }

        //=========== Delete ==============
        [HttpDelete]
        [Route("{orderid:guid}")]
        public async Task<IActionResult> DeleteOrder([FromRoute] Guid orderid)
        {
          var order =  await dbContext.Orders.FindAsync(orderid);
            if(order != null)
            {
                dbContext.Remove(order);
                await dbContext.SaveChangesAsync();
                return Ok(order);
            }
            return NotFound();
        }
    }
}
//An async method runs synchronously until it reaches its
//first await expression, at which point the method is
//suspended until the awaited task is complete. In the
//meantime, control returns to the caller of the method,
//as the example in the next section shows.
