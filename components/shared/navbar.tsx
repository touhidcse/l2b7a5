'use client'

import Link from 'next/link'
import { LogOut, Settings, User, Menu, LayoutDashboard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DropdownMenuLabel } from 'radix-ui/dropdown-menu'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { NavbarProps } from '@/lib/types'
import { logout } from '@/service/logout'
import { getMe } from '@/service/getMe'


// Navigation items configuration
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Technicians', href: '/technicians' },
    { label: 'Registration', href: '/registration' },
    { label: 'Contact', href: '/contact' },
]

// User dropdown menu items
const userMenuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, action: 'dashboard' },
    { label: 'Profile', icon: User, action: 'profile' },
    // { label: 'Settings', icon: Settings, action: 'settings' },
]

export function Navbar({ user }: NavbarProps) {

    console.log(user, "User Success from Navbar Top");
    const router = useRouter()

    const handleUserMenuAction = async (action: string) => {
        console.log(`User clicked: ${action}`)
        // Add your action logic here
        if (action === "dashboard") {
            if (user?.role === "CUSTOMER") {
                router.push("/customer-dashboard")
            } else if (user?.role === "TECHNICIAN") {
                router.push("/technician-dashboard")
            } else if (user?.role === "ADMIN") {
                router.push("/admin-dashboard")
            }
            return;
        }

        if (action === "logout") {
            await logout();
            toast.success("User Logged out Successfully");
            router.push("/login")
            return;
        }
        if (action === "profile") {
            const user = await getMe();
            console.log(user,"From navbar profile");
            router.push("/profile");
            return;
        }
    };

    return (
        <nav className="border-b bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">Fix It Now</span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="px-3 py-2 text-sm font-medium text-foreground rounded-md hover:bg-accent transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* User Dropdown */}
                    {
                        user.role? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div className='cursor-pointer'>
                                        <User className="w-4 h-4 mr-2" />
                                        {/* Account */}
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48">
                                    <DropdownMenuLabel>
                                        <div className='flex flex-col gap 1'>
                                            <p className='text-sm font-medium'>{user?.name || "Name"}</p>
                                            <p className='text-xs text-muted-foreground'>{user?.email || "Email"}</p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuGroup>
                                        {userMenuItems.map((item) => {
                                            const Icon = item.icon
                                            return (
                                                <DropdownMenuItem
                                                    key={item.action}
                                                    onClick={async () => await handleUserMenuAction(item.action)}
                                                >
                                                    <Icon className="w-4 h-4 mr-2" />
                                                    <span>{item.label}</span>
                                                </DropdownMenuItem>
                                            )
                                        })}
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={async () => {
                                            await handleUserMenuAction('logout');
                                        }}
                                        className="text-destructive focus:text-destructive"
                                    >
                                        <LogOut className="w-4 h-4 mr-2" />
                                        <span>Logout</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : <Link href={"/login"}>
                            <button className='cursor-pointer'>Login</button>
                        </Link>
                    }

                    {/* Mobile menu button */}
                    <Button variant="ghost" size="sm" className="md:hidden">
                        <Menu className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}
