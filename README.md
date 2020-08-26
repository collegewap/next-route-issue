Steps to replicate

goto
https://next-route-issue.vercel.app/page1?foo=bar

and then click on page2, you will be navigated to page2

then click on browser back button. URL will get updated, contents wont!

**Note**: Fixed by bumping to 9.5.3-canary.21
https://github.com/vercel/next.js/pull/16477
