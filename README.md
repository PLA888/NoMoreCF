# NoMoreCF

**NoMoreCF** 是一个自动绕过 Cloudflare Turnstile 验证（Turnstile CAPTCHA）的用户脚本工具，帮助用户在浏览网页时免于手动处理 Cloudflare 的验证，提供无缝、便捷的浏览体验。

## 功能

- **自动检测 Cloudflare Turnstile 验证**：监控网页的变化，自动找到并处理 Cloudflare Turnstile 验证。
- **模拟鼠标事件**：通过模拟鼠标移动和点击，智能通过验证。
- **异步操作**：使用 MutationObserver 监控动态加载的元素，无需手动干预。
- **无干扰浏览**：在不影响用户操作的前提下，完成后台验证。

## 安装

### 使用 Tampermonkey/Violentmonkey 安装

1. 确保你已经在浏览器中安装了 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)，这是用户脚本管理器，用于运行自定义的 JavaScript 脚本。
2. 点击以下链接，下载并安装 **NoMoreCF** 用户脚本：

   [**NoMoreCF 脚本地址**](https://greasyfork.org/zh-CN/scripts/513150-autopass-cloudflare-turnstile-captcha)

3. 在弹出的安装页面中点击 **“安装”**。
4. 脚本安装后将自动在浏览器中运行，无需进一步操作。

## 使用方法

1. 安装脚本后，访问任何启用了 Cloudflare 验证的网页。
2. 当页面加载 Turnstile 验证时，**NoMoreCF** 会自动模拟鼠标移动并尝试通过验证。
3. 脚本会自动检测并完成验证，无需用户手动干预。

## 注意事项

- 该脚本仅限用于个人方便，请勿用于非法目的。
- **NoMoreCF** 可能不适用于所有使用 Cloudflare 验证的网页，如有特定需求，请根据场景进行自定义调整。

## 常见问题

### 是否支持所有浏览器？

**NoMoreCF** 兼容支持 Tampermonkey 或 Violentmonkey 的浏览器，包括 Chrome、Firefox、Edge 等。

## 贡献

欢迎提出问题（issues）或提交代码（pull requests）以改进 **NoMoreCF**。如果你有想法或改进建议，欢迎贡献代码！

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

[MIT](./LICENSE)
