using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OrdersAPI.Migrations
{
    /// <inheritdoc />
    public partial class orderlists : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    orderid = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    customerid = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    customername = table.Column<string>(name: "customer_name", type: "nvarchar(max)", nullable: false),
                    itemid = table.Column<string>(name: "item_id", type: "nvarchar(max)", nullable: false),
                    quantity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    rate = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    modeoftransport = table.Column<string>(name: "mode_of_transport", type: "nvarchar(max)", nullable: false),
                    destinationcountry = table.Column<string>(name: "destination_country", type: "nvarchar(max)", nullable: false),
                    productionstartdate = table.Column<string>(name: "production_start_date", type: "nvarchar(max)", nullable: false),
                    productionenddate = table.Column<string>(name: "production_end_date", type: "nvarchar(max)", nullable: false),
                    deliverydate = table.Column<string>(name: "delivery_date", type: "nvarchar(max)", nullable: false),
                    adeliverydate = table.Column<string>(name: "a_delivery_date", type: "nvarchar(max)", nullable: false),
                    orderstaus = table.Column<string>(name: "order_staus", type: "nvarchar(max)", nullable: false),
                    penalty = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.orderid);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");
        }
    }
}
