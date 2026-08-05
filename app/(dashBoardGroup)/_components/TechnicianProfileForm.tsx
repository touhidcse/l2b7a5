'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { User, MapPin, Briefcase, Image, Save } from 'lucide-react';

interface TechnicianProfileFormProps {
    initialData: {
        bio: string | null;
        experience: number;
        profilePhoto: string | null;
        location: string | null;
    };
    onSubmit: (data: {
        bio: string;
        experience: number;
        profilePhoto: string;
        location: string;
    }) => void;
}

export function TechnicianProfileForm({ initialData, onSubmit }: TechnicianProfileFormProps) {
    const [formData, setFormData] = useState({
        bio: initialData.bio || '',
        experience: initialData.experience || 0,
        profilePhoto: initialData.profilePhoto || '',
        location: initialData.location || '',
    });

    const handleChange = (field: string, value: string | number) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="p-6 space-y-4">
                {/* Profile Photo */}
                <div>
                    <Label className="text-sm font-medium flex items-center gap-2">
                        <Image className="w-4 h-4" />
                        Profile Photo URL
                    </Label>
                    <Input
                        type="url"
                        value={formData.profilePhoto}
                        onChange={(e) => handleChange('profilePhoto', e.target.value)}
                        placeholder="https://example.com/photo.jpg"
                        className="mt-1"
                    />
                </div>

                {/* Location */}
                <div>
                    <Label className="text-sm font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Location
                    </Label>
                    <Input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        placeholder="e.g., Dhaka, Bangladesh"
                        className="mt-1"
                    />
                </div>

                {/* Experience */}
                <div>
                    <Label className="text-sm font-medium flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Years of Experience
                    </Label>
                    <Input
                        type="number"
                        value={formData.experience}
                        onChange={(e) => handleChange('experience', parseInt(e.target.value) || 0)}
                        placeholder="0"
                        className="mt-1"
                        min="0"
                    />
                </div>

                {/* Bio */}
                <div>
                    <Label className="text-sm font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Bio
                    </Label>
                    <Textarea
                        value={formData.bio}
                        onChange={(e) => handleChange('bio', e.target.value)}
                        placeholder="Tell customers about yourself and your expertise..."
                        className="mt-1 min-h-[120px]"
                    />
                </div>
            </Card>

            <div className="flex justify-end">
                <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Update Profile
                </Button>
            </div>
        </form>
    );
}