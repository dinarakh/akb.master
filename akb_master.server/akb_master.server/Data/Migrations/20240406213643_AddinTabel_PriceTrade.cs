using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace akb_master.server.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddinTabel_PriceTrade : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Price_Trade",
                table: "Products",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Price_Trade",
                table: "Products");
        }
    }
}
