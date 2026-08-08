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
]

export function Navbar({ user }: NavbarProps) {
    const router = useRouter()

    const handleUserMenuAction = async (action: string) => {
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
            await getMe();
            // router.push("/profile");
            // return;
            if (user.role ==="ADMIN"){
                router.push("/admin-dashboard/profile");
                return;
            }else if(user.role ==="CUSTOMER"){
                 router.push("/customer-dashboard/profile");
                return;
            } else if (user.role ==="TECHNICIAN"){
                router.push("/technician-dashboard/profile");
                return;
            }
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
                                className="px-3 py-2 text-sm font-medium text-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* User Dropdown */}
                    {user?.role ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="cursor-pointer flex items-center p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-colors">
                                    <User className="w-4 h-4 mr-2" />
                                    <span className="text-sm font-medium">{user?.name || "Account"}</span>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuLabel className="px-2 py-1.5">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm font-medium">{user?.name || "Name"}</p>
                                        <p className="text-xs text-muted-foreground">{user?.email || "Email"}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    {userMenuItems.map((item) => {
                                        const Icon = item.icon
                                        return (
                                            <DropdownMenuItem
                                                key={item.action}
                                                onClick={async () => await handleUserMenuAction(item.action)}
                                                className="cursor-pointer hover:bg-primary/10 hover:text-primary"
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
                                    className="text-destructive focus:text-destructive cursor-pointer"
                                >
                                    <LogOut className="w-4 h-4 mr-2" />
                                    <span>Logout</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link href="/login">
                            <Button size="sm">Login</Button>
                        </Link>
                    )}

                    {/* Mobile menu button */}
                    <Button variant="ghost" size="sm" className="md:hidden">
                        <Menu className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}