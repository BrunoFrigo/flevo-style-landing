import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(headless=True)
        pg=await (await b.new_context(viewport={"width":390,"height":844})).new_page()
        await pg.goto("http://localhost:8080/login",wait_until="networkidle")
        print(await pg.eval_on_selector("h1","e=>e.className"))
        await b.close()
asyncio.run(main())
