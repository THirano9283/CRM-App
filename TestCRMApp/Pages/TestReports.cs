using Bunit;
using Microsoft.Extensions.DependencyInjection;
using CRMApp.Pages;

namespace TestCRMApp
{
	[Collection("CRMApp")]
	public class TestReports
	{
		[Fact]
		public void ViewIsCreated()
		{
			using var ctx = new TestContext();
			ctx.JSInterop.Mode = JSRuntimeMode.Loose;
			var componentUnderTest = ctx.RenderComponent<Reports>();
			Assert.NotNull(componentUnderTest);
		}
	}
}
