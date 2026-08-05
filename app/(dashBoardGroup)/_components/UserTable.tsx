'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
    Search, 
    User, 
    Mail, 
    Phone, 
    MapPin,
    Ban,
    CheckCircle,
    UserCheck,
    UserX
} from 'lucide-react';

interface UserData {
    id: string;
    email: string;
    name: string;
    role: 'CUSTOMER' | 'TECHNICIAN' | 'ADMIN';
    phone: string | null;
    address: string | null;
    createdAt: string;
    isBan: boolean;
}

interface UserTableProps {
    users: UserData[];
    onUpdateStatus: (userId: string, isBan: boolean) => void;
}

export function UserTable({ users, onUpdateStatus }: UserTableProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState<string>('all');

    const filteredUsers = users.filter((user) => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === 'all' || user.role === filterRole;
        return matchesSearch && matchesRole;
    });

    const getRoleBadge = (role: string) => {
        const colors: Record<string, string> = {
            'CUSTOMER': 'bg-blue-500/15 text-blue-700 dark:text-blue-400',
            'TECHNICIAN': 'bg-purple-500/15 text-purple-700 dark:text-purple-400',
            'ADMIN': 'bg-red-500/15 text-red-700 dark:text-red-400',
        };
        return colors[role] || '';
    };

    return (
        <div className="space-y-4">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <select
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                    className="px-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
                >
                    <option value="all">All Roles</option>
                    <option value="CUSTOMER">Customers</option>
                    <option value="TECHNICIAN">Technicians</option>
                    <option value="ADMIN">Admins</option>
                </select>
            </div>

            {/* User List */}
            <div className="space-y-3">
                {filteredUsers.map((user) => (
                    <Card key={user.id} className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-medium text-slate-900 dark:text-white">
                                        {user.name}
                                    </span>
                                    <Badge className={getRoleBadge(user.role)}>
                                        {user.role}
                                    </Badge>
                                    {user.isBan && (
                                        <Badge variant="destructive">Banned</Badge>
                                    )}
                                </div>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mt-1">
                                    <span className="flex items-center gap-1">
                                        <Mail className="w-3 h-3" />
                                        {user.email}
                                    </span>
                                    {user.phone && (
                                        <>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <Phone className="w-3 h-3" />
                                                {user.phone}
                                            </span>
                                        </>
                                    )}
                                    {user.address && (
                                        <>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" />
                                                {user.address}
                                            </span>
                                        </>
                                    )}
                                    <span>•</span>
                                    <span>
                                        Joined: {new Date(user.createdAt).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {user.role !== 'ADMIN' && (
                                    <Button
                                        onClick={() => onUpdateStatus(user.id, !user.isBan)}
                                        variant={user.isBan ? 'outline' : 'destructive'}
                                        size="sm"
                                    >
                                        {user.isBan ? (
                                            <>
                                                <UserCheck className="w-3 h-3 mr-1" />
                                                Unban
                                            </>
                                        ) : (
                                            <>
                                                <Ban className="w-3 h-3 mr-1" />
                                                Ban
                                            </>
                                        )}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}

                {filteredUsers.length === 0 && (
                    <Card className="p-8 text-center">
                        <User className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white">No Users Found</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            Try adjusting your search or filters.
                        </p>
                    </Card>
                )}
            </div>
        </div>
    );
}