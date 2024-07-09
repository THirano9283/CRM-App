using Bunit;
using Microsoft.Extensions.DependencyInjection;
using CRMApp.Pages;

namespace TestCRMApp
{
	[Collection("CRMApp")]
	public class TestTasks
	{
		[Fact]
		public void ViewIsCreated()
		{
			using var ctx = new TestContext();
			ctx.JSInterop.Mode = JSRuntimeMode.Loose;
			var componentUnderTest = ctx.RenderComponent<Tasks>();
			Assert.NotNull(componentUnderTest);
		}
	}
}
