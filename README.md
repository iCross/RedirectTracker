# **RedirectTracker**

RedirectTracker is a simple, no-fuss tool designed to unravel the destinations of shortened URLs using Cloudflare Workers. Ideal for those quick checks to see where a link is really taking you.

## **Getting Started**

### **Deploying to Cloudflare Workers**

1. **Set Up Your Worker:**
    - Go to your Cloudflare dashboard and create a new Worker.
    - In the script editor, replace the default script with the content of **`RedirectTracker.js`**.
2. **Save and Deploy:**
    - After pasting the script, save and deploy your Worker.
    - Note the URL of your deployed Worker; you'll need it for the zsh function.

### **Setting Up the zsh Function**

To make using RedirectTracker as seamless as possible, you can set up a quick function in your zsh environment:

1. **Open Your `.zshrc`:**
    - Open your **`.zshrc`** file in your favorite text editor.
2. **Add the Function:**
    - Copy and paste the following function into your **`.zshrc`** file:
        
        ```
        function eurl() {
            http --body YOUR_WORKER_URL X-Target-URL:"$1"
        }
        
        ```

    - Replace YOUR_WORKER_URL with the URL of your deployed Cloudflare Worker. This example assumes you have httpie installed.

3. **Reload Your `.zshrc`:**
    - Apply the changes by running **`source ~/.zshrc`** in your terminal.

## **Usage**

With the setup complete, simply use the **`eurl`** command followed by the shortened URL you wish to unravel:

```
eurl <shortened-url>

```

## **Feedback and Contributions**

Found this tool handy or have ideas on how to improve it? Feel free to open an issue or submit a pull request on GitHub. Your feedback is what helps make RedirectTracker even better!
