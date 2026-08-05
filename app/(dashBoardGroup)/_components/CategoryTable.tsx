'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
    Search, 
    Plus, 
    Edit, 
    Trash2, 
    Tag,
    Package
} from 'lucide-react';
import { ICategory } from '@/lib/types';

interface CategoryTableProps {
    categories: ICategory[];
    onDelete?: (categoryId: string) => void;
    onEdit?: (category: ICategory) => void;
    onCreate?: () => void;
}

export function CategoryTable({ categories, onDelete, onEdit, onCreate }: CategoryTableProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCategories = categories.filter((category) =>
        category.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                        placeholder="Search categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                    />
                </div>
                {onCreate && (
                    <Button onClick={onCreate} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        <Plus className="w-4 h-4 mr-1" />
                        New Category
                    </Button>
                )}
            </div>

            {/* Category List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCategories.map((category) => (
                    <Card key={category.id} className="p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <Tag className="w-4 h-4 text-indigo-500" />
                                    <span className="font-medium text-slate-900 dark:text-white">
                                        {category.type}
                                    </span>
                                </div>
                                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                    <span className="flex items-center gap-1">
                                        <Package className="w-3 h-3" />
                                        {category.services?.length || 0} services
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                {onEdit && (
                                    <Button
                                        onClick={() => onEdit(category)}
                                        variant="ghost"
                                        size="sm"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </Button>
                                )}
                                {onDelete && (
                                    <Button
                                        onClick={() => onDelete(category.id)}
                                        variant="ghost"
                                        size="sm"
                                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {filteredCategories.length === 0 && (
                <Card className="p-8 text-center">
                    <Tag className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">No Categories Found</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {searchTerm ? 'Try adjusting your search.' : 'Create your first category.'}
                    </p>
                </Card>
            )}
        </div>
    );
}