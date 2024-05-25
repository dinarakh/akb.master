using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace akb_master.server.Data.Migrations
{
    /// <inheritdoc />
    public partial class ImageByteUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "ByteImage",
                table: "Images",
                type: "bytea",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "ByteImage",
                table: "Images",
                type: "integer",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldType: "bytea");
        }
    }
}
