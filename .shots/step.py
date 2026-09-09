import asyncio
from playwright.async_api import async_playwright
async def run(w,h,tag):
    async with async_playwright() as p:
        b=await p.chromium.launch(headless=True)
        pg=await (await b.new_context(viewport={"width":w,"height":h})).new_page()
        await pg.goto("http://localhost:8080/cadastro",wait_until="networkidle")
        await pg.fill('input[name="name"]',"Loja X"); await pg.fill('input[name="phone"]',"11999999999")
        await pg.fill('input[name="email"]',"a@a.com"); await pg.fill('input[name="password"]',"12345678")
        await pg.fill('input[name="confirm"]',"12345678")
        await pg.check('input[type="checkbox"]')
        await pg.click('button[type="submit"]')
        await pg.wait_for_timeout(1500)
        print(tag, await pg.evaluate("document.documentElement.scrollWidth"))
        await pg.screenshot(path=f".shots/step-{tag}.png")
        await b.close()
asyncio.run(run(390,844,"iph")); asyncio.run(run(820,1180,"tab"))
