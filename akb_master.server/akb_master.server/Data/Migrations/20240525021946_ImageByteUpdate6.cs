using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace akb_master.server.Data.Migrations
{
    /// <inheritdoc />
    public partial class ImageByteUpdate6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "ByteImage",
                table: "Images",
                type: "integer",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldType: "bytea");

            migrationBuilder.AddColumn<byte[]>(
                name: "OByteImage",
                table: "Images",
                type: "bytea",
                nullable: false,
                defaultValue: new byte[0]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OByteImage",
                table: "Images");

            migrationBuilder.AlterColumn<byte[]>(
                name: "ByteImage",
                table: "Images",
                type: "bytea",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");
        }
    }
}
