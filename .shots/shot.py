import asyncio
from playwright.async_api import async_playwright
SIZES=[("iph",390,844),("tab",820,1180)]
PAGES=[("home","/"),("login","/login"),("cad","/cadastro")]
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(headless=True)
        for tag,w,h in SIZES:
            ctx=await b.new_context(viewport={"width":w,"height":h})
            pg=await ctx.new_page()
            for name,path in PAGES:
                await pg.goto("http://localhost:8080"+path+"?v=2",wait_until="domcontentloaded")
                await pg.wait_for_timeout(1500)
                await pg.screenshot(path=f"/dev-server/.shots/{tag}-{name}-v2.png")
            await ctx.close()
        await b.close()
asyncio.run(main())
