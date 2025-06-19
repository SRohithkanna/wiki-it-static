// src/data/articlesData.js

const articles = [
    // --- Account Management Category ---
    {
        category: 'account-management',
        slug: 'password-reset',
        title: 'How to Reset Your Password',
        content: `
            <p>If you've forgotten your password or it has expired, follow these simple steps to regain access to your account:</p>
            <ol>
                <li><strong>Visit the Password Reset Portal.</li>
                <li><strong>Enter Your Credentials:</strong> Input your employee ID or the email address associated with your account.</li>
                <li><strong>Verify Your Identity:</strong> Follow the on-screen instructions to verify your identity. This might involve answering security questions or entering a one-time code sent to your registered mobile device.</li>
                <li><strong>Create a New Password.</li>
                <li><strong>Confirm and Log In:</strong> Re-enter your new password to confirm it, then proceed to log in with your updated credentials.</li>
            </ol>
            <p><strong>Troubleshooting Tip:</strong> If you face any issues during the process, please ensure you are connected to the company VPN (if required) or contact the IT Help Desk immediately for assistance.</p>
        `
    },
    {
        category: 'account-management',
        slug: 'account-lockout',
        title: 'What to Do If Your Account is Locked Out',
        content: `
            <p>Account lockouts happen for security reasons, usually after multiple failed login attempts. Here's what you should do:</p>
            <ul>
                <li><strong>Wait It Out:</strong> Many systems automatically unlock your account after a short period (e.g., 15-30 minutes). Try logging in again after waiting.</li>
                <li><strong>Self-Service Password Reset:</strong> If waiting doesn't work, attempt to reset your password using the <a href="https://yourcompany.com/password-reset" target="_blank">password reset portal</a>. This often clears the lockout.</li>
                <li><strong>Contact IT Support:</strong> If your account remains locked or you cannot reset your password, contact the IT Help Desk. Provide your employee ID and a brief description of the issue.</li>
            </ul>
            <p><strong>Prevention:</strong> Always double-check your username and password before attempting to log in. Avoid sharing your credentials with anyone.</p>
        `
    },
    {
        category: 'account-management',
        slug: 'access-requests',
        title: 'Requesting Access to Applications or Resources',
        content: `
            <p>To gain access to new software applications, shared network drives, or specific system resources, please follow our access request procedure:</p>
            <ol>
                <li><strong>Submit a Request:</strong> Log in to the <a href="https://yourcompany.com/access-requests" target="_blank">Access Request System (ARS)</a>.</li>
                <li><strong>Select Resource:</strong> Choose the specific application, folder, or resource you need access to from the available options.</li>
                <li><strong>Provide Justification:</strong> Clearly state the business reason for needing this access. Your manager will review this.</li>
                <li><strong>Await Approval:</strong> Your request will be routed to your manager and relevant department heads for approval. You'll receive email notifications on its status.</li>
                <li><strong>Access Granted:</strong> Once approved, the IT team will provision your access, and you'll be notified when it's complete.</li>
            </ol>
        `
    },

    // --- Hardware Category ---
    {
        category: 'hardware',
        slug: 'computer-setup',
        title: 'Setting Up Your New Workstation',
        content: `
            <p>Congratulations on your new workstation! Here’s a step-by-step guide to get you up and running:</p>
            <ol>
                <li><strong>Unpack Components:</strong> Carefully remove the computer, monitor(s), keyboard, and mouse from their packaging.</li>
                <li><strong>Connect Monitors:</strong> Use the provided HDMI, DisplayPort, or USB-C cables to connect your monitor(s) to the computer.</li>
                <li><strong>Plug in Peripherals:</strong> Connect your keyboard, mouse, webcam, and any other USB devices to the available USB ports on your computer.</li>
                <li><strong>Power Up:</strong> Connect the power cable to your computer and monitor(s), then plug them into a power strip or wall outlet.</li>
                <li><strong>Network Connection:</strong> For wired connections, plug an Ethernet cable into the computer and a network port. For Wi-Fi, you’ll connect after initial setup.</li>
                <li><strong>First Boot & Login:</strong> Press the power button. Follow any on-screen prompts for initial setup. Once at the login screen, enter your company credentials.</li>
            </ol>
        `
    },
    {
        category: 'hardware',
        slug: 'printer-troubleshooting',
        title: 'Common Printer Troubleshooting Steps',
        content: `
            <p>Experiencing printer issues? Try these common solutions before contacting IT, as they often resolve the problem quickly:</p>
            <ul>
                <li><strong>Check Power and Connections:</strong> Ensure the printer is powered on and all cables (USB, Ethernet, power) are securely connected.</li>
                <li><strong>Clear Paper Jams:</strong> Carefully open all printer trays and access points to check for and remove any jammed paper.</li>
                <li><strong>Check Ink/Toner Levels:</strong> Verify that ink or toner cartridges are not empty or critically low. Replace them if necessary.</li>
                <li><strong>Restart Printer:</strong> Power off the printer, wait for 10-15 seconds, then power it back on. This can clear temporary errors.</li>
                <li><strong>Restart Your Computer:</strong> Sometimes, the issue is with your computer's connection to the printer, not the printer itself.</li>
                <li><strong>Clear Print Queue:</strong> On your computer, go to "Devices and Printers" (Windows) or "Printers & Scanners" (macOS), open your printer's queue, and delete any stuck print jobs.</li>
            </ul>
        `
    },
    {
        category: 'hardware',
        slug: 'hardware-inventory',
        title: 'Updating Hardware Inventory Information',
        content: `
            <p>Accurate hardware inventory is essential for asset management, warranty tracking, and IT support. Please help us maintain accurate records by updating inventory information when necessary.</p>
            <p><strong>When to Update:</strong></p>
            <ul>
                <li>You receive new hardware (laptops, monitors, peripherals).</li>
                <li>Hardware is transferred to a different user or department.</li>
                <li>Hardware is sent for repair or disposed of.</li>
            </ul>
            <p><strong>How to Update:</strong></p>
            <ol>
                <li>Log in to the <a href="https://yourcompany.com/asset-management" target="_blank">Asset Management Portal</a>.</li>
                <li>Locate the specific asset using its serial number or internal asset tag.</li>
                <li>Edit the relevant fields (e.g., location, assigned user, status).</li>
                <li>For new assets, click "Add New Asset" and fill in all required details.</li>
            </ol>
        `
    },

    // --- Software Category ---
    {
        category: 'software',
        slug: 'vpn-installation',
        title: 'Installing and Configuring VPN Client',
        content: `
            <p>The Virtual Private Network (VPN) client provides a secure connection to the company network, allowing you to access internal resources from outside the office.</p>
            <p><strong>Installation Steps:</strong></p>
            <ol>
                <li><strong>Download Client:</strong> Navigate to the <a href="https://yourcompany.com/software-downloads" target="_blank">Software Distribution Portal</a> and download the VPN client compatible with your operating system (Windows, macOS, Linux).</li>
                <li><strong>Run Installer:</strong> Double-click the downloaded file and follow the on-screen prompts. Accept the license agreement and choose the default installation location.</li>
                <li><strong>Launch VPN Client:</strong> Once installed, open the VPN application.</li>
                <li><strong>Configure Connection:</strong> Enter the VPN server address (e.g., <code>vpn.yourcompany.com</code>) and your company network credentials when prompted. This information is typically provided by IT during onboarding.</li>
                <li><strong>Connect:</strong> Click the "Connect" button. You should see a confirmation once the connection is established.</li>
            </ol>
        `
    },
    {
        category: 'software',
        slug: 'office-365-setup',
        title: 'Setting Up Microsoft Office 365',
        content: `
            <p>To install and set up Microsoft Office 365 applications (Word, Excel, PowerPoint, Outlook, etc.) on your computer, follow these instructions:</p>
            <ol>
                <li><strong>Uninstall Older Versions (Optional but Recommended):</strong> If you have previous versions of Microsoft Office installed, it's generally best to uninstall them first to avoid conflicts.</li>
                <li><strong>Access Office Portal:</strong> Open your browser and go to <a href="https://portal.office.com" target="_blank">portal.office.com</a>. Sign in using your company Office 365 email address and password.</li>
                <li><strong>Initiate Installation:</strong> On the Office 365 home page, look for an "Install apps" button (usually in the top right corner) and select "Office 365 apps".</li>
                <li><strong>Run Installer:</strong> A setup file will download. Run this file and follow the on-screen instructions to complete the installation.</li>
                <li><strong>Activate Office:</strong> Once the applications are installed, open any Office app (e.g., Word). You may be prompted to sign in again to activate your license. Use your company Office 365 account.</li>
            </ol>
        `
    },
    {
        category: 'software',
        slug: 'software-updates',
        title: 'Performing Regular Software Updates',
        content: `
            <p>Regularly updating your operating system and applications is crucial for maintaining security, improving performance, and gaining access to new features.</p>
            <p><strong>Windows Updates:</strong></p>
            <ol>
                <li>Go to Start Menu &gt; Settings &gt; Update & Security &gt; Windows Update.</li>
                <li>Click "Check for updates" and install any available updates.</li>
                <li>Restart your computer if prompted to complete the installation.</li>
            </ol>
            <p><strong>macOS Updates:</strong></p>
            <ol>
                <li>Go to Apple menu &gt; System Settings (or System Preferences) &gt; General &gt; Software Update.</li>
                <li>Install any available macOS updates.</li>
            </ol>
            <p><strong>Application Updates:</strong></p>
            <ul>
                <li>Many applications have an "Update" or "Check for Updates" option within their Help or File menu.</li>
                <li>For company-managed software, updates may be pushed automatically. Ensure your device is connected to the network regularly.</li>
            </ul>
        `
    },

    // --- Network and Security Category ---
    {
        category: 'network-and-security',
        slug: 'wi-fi-troubleshooting',
        title: 'Troubleshooting Wi-Fi Connection Issues',
        content: `
            <p>If you are experiencing issues connecting to the company Wi-Fi network, try these common troubleshooting steps:</p>
            <ol>
                <li><strong>Check Wi-Fi Toggle:</strong> Ensure Wi-Fi is enabled on your laptop or device. Look for the Wi-Fi icon in your system tray or control center.</li>
                <li><strong>Forget Network:</strong> Go to your Wi-Fi settings, "forget" the company Wi-Fi network (e.g., "Company-WiFi"), and then attempt to reconnect. This often resolves minor connection glitches.</li>
                <li><strong>Restart Device:</strong> A simple restart of your laptop or mobile device can often resolve network connectivity problems.</li>
                <li><strong>Check Credentials:</strong> Verify that you are entering the correct Wi-Fi username and password. Passwords are case-sensitive.</li>
                <li><strong>Move Closer to Access Point:</strong> If you are far from a Wi-Fi access point, move closer to improve signal strength.</li>
                <li><strong>Restart Router/Access Point (if applicable):</strong> If you are in a home office and using a company-provided router, try restarting it by unplugging it for 30 seconds and plugging it back in.</li>
            </ol>
        `
    },
    {
        category: 'network-and-security',
        slug: 'network-configuration',
        title: 'Basic Network Configuration for New Devices',
        content: `
            <p>When connecting a new device (laptop, desktop, or specialized equipment) to the company network, basic configuration is often required. Most devices will configure themselves automatically using DHCP, but some cases may require specific settings.</p>
            <p><strong>Standard Setup (DHCP):</strong></p>
            <ul>
                <li><strong>Wired:</strong> Plug an Ethernet cable into the device and a wall port or network switch. The device should automatically obtain an IP address.</li>
                <li><strong>Wireless:</strong> Select the company Wi-Fi SSID (e.g., "Company-Secure-WiFi") from your device's Wi-Fi settings and enter your network credentials.</li>
            </ul>
            <p><strong>Advanced Configuration (Specific Cases):</strong></p>
            <ul>
                <li><strong>Static IP:</strong> For servers, network printers, or specific lab equipment, IT may provide a static IP address, subnet mask, gateway, and DNS server addresses that need to be manually entered in the device's network settings.</li>
                <li><strong>Proxy Settings:</strong> Access to certain internal or external web resources might require configuring a web proxy. Check the IT intranet for specific proxy server addresses if needed.</li>
            </ul>
        `
    },
    {
        category: 'network-and-security',
        slug: 'firewall-settings',
        title: 'Understanding Company Firewall Settings',
        content: `
            <p>Our company firewall system is a critical component of our cybersecurity defense, designed to protect our network from unauthorized access and malicious threats. It acts as a barrier between our internal network and external networks (like the internet).</p>
            <p><strong>Key Principles:</strong></p>
            <ul>
                <li><strong>Default-Deny Policy:</strong> The firewall operates on a "default-deny" principle, meaning it blocks all network traffic unless explicitly allowed by a rule.</li>
                <li><strong>Central Management:</strong> Most firewall rules are managed centrally by the IT Security team to ensure consistency and strong security posture.</li>
                <li><strong>Necessary Exceptions:</strong> Exceptions are created for critical business applications, services, and authorized external access (e.g., VPN connections).</li>
                <li><strong>Endpoint Protection:</strong> In addition to the network firewall, your individual computer runs a local firewall (e.g., Windows Defender Firewall, macOS Firewall) which provides an additional layer of protection.</li>
            </ul>
            <p><strong>Requesting Firewall Exceptions:</strong></p>
            <p>If an application or service requires a specific network port or protocol to be opened through the firewall, you must submit a formal request to the IT Security team. This request should include a clear business justification and technical details.</p>
        `
    }
];

export default articles;