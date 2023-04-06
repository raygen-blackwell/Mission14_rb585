﻿using System;
using Microsoft.EntityFrameworkCore;

namespace MovieAPI.Data
{
	public class MovieDbContext : DbContext
	{
		public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }

		public DbSet<MovieData> Movies { get; set; }
	}
}

