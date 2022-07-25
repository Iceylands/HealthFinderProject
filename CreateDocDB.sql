USE [HealthFinder]
GO

/****** Object:  Table [dbo].[Doctors]    Script Date: 7/25/2022 8:52:53 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Doctors](
	[ID] [int] NOT NULL,
	[Name] [varchar](128) NULL,
	[Specialty] [varchar](64) NULL,
	[Rating] [smallint] NULL,
	[Location] [varchar](128) NULL,
	[Languages] [varchar](256) NULL,
 CONSTRAINT [PK_Doctors] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
