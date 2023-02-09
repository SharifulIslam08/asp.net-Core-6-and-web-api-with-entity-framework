IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230208051432_orderlists')
BEGIN
    CREATE TABLE [Orders] (
        [orderid] uniqueidentifier NOT NULL,
        [customerid] nvarchar(max) NOT NULL,
        [customer_name] nvarchar(max) NOT NULL,
        [item_id] nvarchar(max) NOT NULL,
        [quantity] nvarchar(max) NOT NULL,
        [rate] nvarchar(max) NOT NULL,
        [mode_of_transport] nvarchar(max) NOT NULL,
        [destination_country] nvarchar(max) NOT NULL,
        [production_start_date] nvarchar(max) NOT NULL,
        [production_end_date] nvarchar(max) NOT NULL,
        [delivery_date] nvarchar(max) NOT NULL,
        [a_delivery_date] nvarchar(max) NOT NULL,
        [order_staus] nvarchar(max) NOT NULL,
        [penalty] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Orders] PRIMARY KEY ([orderid])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230208051432_orderlists')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20230208051432_orderlists', N'7.0.2');
END;
GO

COMMIT;
GO

