from playwright.sync_api import sync_playwright, expect

def test_frontend_refactor(page):
    print("Testing Home page...")
    page.goto("http://localhost:3001/")
    page.wait_for_selector("text=Aureum")
    page.screenshot(path="/home/jules/verification/home_page.png")

    print("Testing Trade Buyer page...")
    page.goto("http://localhost:3001/trade/buyer")
    page.wait_for_selector("text=Awaiting Payment")
    page.screenshot(path="/home/jules/verification/buyer_page.png")

    print("Testing Merchant page...")
    page.goto("http://localhost:3001/merchant")
    page.wait_for_selector("text=Merchant Command")
    page.screenshot(path="/home/jules/verification/merchant_page.png")

    print("All screenshots taken successfully!")

if __name__ == "__main__":
    import os
    os.makedirs("/home/jules/verification", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_frontend_refactor(page)
        finally:
            browser.close()