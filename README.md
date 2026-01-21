# MNNIT-Connect Frontend

A comprehensive React-based frontend application for campus management, built with Vite, React Router, and Tailwind CSS.

## 🚀 Cross-Platform Setup

### Prerequisites

- **Node.js**: >= 18.17.0
- **npm**: >= 9.0.0
- **Git**: Latest version

### 📱 **Windows Setup**

#### Option 1: Automatic Setup (Recommended)
```cmd
# Double-click to run:
setup-windows.bat

# Or run in Command Prompt:
setup-windows.bat
```

#### Option 2: Manual Setup
```cmd
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### 🐧 **Linux/macOS Setup**

#### Option 1: Automatic Setup (Recommended)
```bash
# Make scripts executable
chmod +x setup.sh start.sh build.sh

# Run setup
./setup.sh

# Start development server
./start.sh
```

#### Option 2: Manual Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📋 Available Scripts

| Script | Description | Windows | Unix/Linux |
|--------|-------------|---------|------------|
| Development Server | Start dev server with hot reload | `start-windows.bat` or `npm run dev` | `./start.sh` or `npm run dev` |
| Build | Create production build | `build-windows.bat` or `npm run build` | `./build.sh` or `npm run build` |
| Build + Analyze | Build and analyze bundle | `npm run build:analyze` | `npm run build:analyze` |
| Analyze Build | Analyze existing build | `analyze-build.bat` or `npm run analyze` | `./analyze-build.sh` or `npm run analyze` |
| Preview | Preview production build | `npm run preview` | `npm run preview` |
| Lint | Check code quality | `npm run lint` | `npm run lint` |
| Clean | Clean build directory | `npm run clean` | `npm run clean` |

## 🔍 **Build Analysis**

The project now generates **meaningful asset names** that clearly indicate their purpose:

### 📦 **Generated Asset Files**

- **`mnnit-connect-app-[hash].js`** → Your main application (pages, components, logic)
- **`vendor-react-[hash].js`** → React framework and routing (React, React-DOM, Router)
- **`vendor-ui-[hash].js`** → Radix UI component library
- **`vendor-utils-[hash].js`** → HTTP client (Axios) and CSS utilities
- **`vendor-icons-[hash].js`** → Lucide React icon library
- **`vendor-forms-[hash].js`** → Form handling and validation
- **`vendor-data-[hash].js`** → Date formatting and chart libraries
- **`mnnit-connect-index-[hash].css`** → All your styles (Tailwind CSS)

### 📊 **Analyze Your Build**

Run the build analyzer to see detailed information about your bundle:

```bash
# Build and analyze in one command
npm run build:analyze

# Or analyze existing build
npm run analyze

# Platform-specific scripts
./analyze-build.sh      # Linux/macOS
analyze-build.bat       # Windows
```

This shows you:
- File sizes and what each contains
- Organized asset directory structure
- Performance optimization opportunities

## 🌐 **Accessing the Application**

### Development Server
- **Local**: http://localhost:9002
- **Network Access**: http://YOUR_IP:9002 (accessible from other devices)

### Production Preview
- **Local**: http://localhost:9002
- **Network Access**: http://YOUR_IP:9002

## 🔧 **Cross-Platform Features**

✅ **Windows Compatibility**
- Windows batch files for easy setup
- Cross-platform environment variables
- Windows-specific path handling

✅ **macOS/Linux Compatibility**
- Shell scripts for automation
- Unix permissions handling
- POSIX-compliant commands

✅ **Network Access**
- Development server accessible from other devices
- Proper CORS configuration
- Mobile testing support

✅ **Descriptive Build Assets**
- Clear file naming convention
- Organized asset structure
- Easy debugging and analysis

## 🛠️ **Development**

```bash
# Install new dependencies
npm install <package-name>

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Clean build directory
npm run clean

# Analyze build composition
npm run analyze
```

## 📱 **Mobile Development**

Access your development server from mobile devices:

1. Make sure your computer and mobile are on the same network
2. Find your computer's IP address:
   - **Windows**: `ipconfig`
   - **macOS/Linux**: `ifconfig` or `ip addr`
3. Access: `http://YOUR_IP:9002`

## 🏗️ **Project Structure**

```
src/
├── components/     # Reusable UI components
├── pages/         # Application pages
├── lib/           # Utilities and helpers
├── hooks/         # Custom React hooks
├── services/      # API services
└── app/           # App-level configuration

dist/
├── assets/
│   ├── js/        # JavaScript bundles (with descriptive names)
│   ├── styles/    # CSS files
│   ├── images/    # Image assets
│   └── fonts/     # Font files
└── index.html     # Main HTML file
```

## 🔍 **Troubleshooting**

### Port Already in Use
```bash
# Kill process using port 9002
# Windows:
netstat -ano | findstr :9002
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti :9002 | xargs kill -9
```

### Permission Denied (Unix/Linux)
```bash
chmod +x setup.sh start.sh build.sh analyze-build.sh
```

### Network Access Issues
- Check firewall settings
- Ensure port 9002 is open
- Try running with `--host 0.0.0.0`

### Understanding Build Assets
```bash
# Analyze your build to understand bundle composition
npm run analyze

# This shows you what each file contains and their sizes
```

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 **License**

This project is licensed under the MIT License.

---

**✨ Ready to use on Windows, macOS, and Linux with descriptive build assets!**
