using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace akb_master.server.Data.Migrations
{
    /// <inheritdoc />
    public partial class ImageByteUpdate3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "ByteImage",
                table: "Images",
                type: "bytea",
                nullable: false,
                defaultValue: new byte[0]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ByteImage",
                table: "Images");
        }
    }
}
