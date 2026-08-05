'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Plus, X, Clock, Calendar } from 'lucide-react';
import { IAvailability, DAYS, DayOfWeek } from '@/lib/types';

interface AvailabilityFormProps {
    initialAvailabilities?: IAvailability[];
    onSubmit: (availabilities: IAvailability[]) => void;
}

interface AvailabilitySlot {
    day: DayOfWeek;
    startTime: string;
    endTime: string;
    isAvailable: boolean;
}

export function AvailabilityForm({ initialAvailabilities = [], onSubmit }: AvailabilityFormProps) {
    const [slots, setSlots] = useState<AvailabilitySlot[]>(
        initialAvailabilities.length > 0
            ? initialAvailabilities.map((a) => ({
                day: a.day,
                startTime: a.startTime || '09:00',
                endTime: a.endTime || '17:00',
                isAvailable: a.isAvailable,
              }))
            : DAYS.map((day) => ({
                day,
                startTime: '09:00',
                endTime: '17:00',
                isAvailable: true,
              }))
    );

    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const handleAddSlot = () => {
        setSlots([
            ...slots,
            {
                day: 'SATURDAY',
                startTime: '09:00',
                endTime: '17:00',
                isAvailable: true,
            },
        ]);
        setEditingIndex(slots.length);
    };

    const handleRemoveSlot = (index: number) => {
        setSlots(slots.filter((_, i) => i !== index));
    };

    const handleSlotChange = (index: number, field: keyof AvailabilitySlot, value: any) => {
        const updated = [...slots];
        updated[index] = { ...updated[index], [field]: value };
        setSlots(updated);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const availabilities = slots.map((slot) => ({
            id: initialAvailabilities.find((a) => a.day === slot.day)?.id || '',
            day: slot.day,
            startTime: slot.startTime,
            endTime: slot.endTime,
            isAvailable: slot.isAvailable,
            technicianId: '',
        }));
        onSubmit(availabilities);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Availability Schedule
                    </h3>
                    <Button
                        type="button"
                        onClick={handleAddSlot}
                        variant="outline"
                        size="sm"
                    >
                        <Plus className="w-4 h-4 mr-1" />
                        Add Slot
                    </Button>
                </div>

                <div className="space-y-3">
                    {slots.map((slot, index) => (
                        <div key={index} className="flex flex-wrap items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            {/* Day */}
                            <div className="flex-1 min-w-[120px]">
                                <select
                                    value={slot.day}
                                    onChange={(e) => handleSlotChange(index, 'day', e.target.value as DayOfWeek)}
                                    className="w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm"
                                >
                                    {DAYS.map((day) => (
                                        <option key={day} value={day}>
                                            {day}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Start Time */}
                            <div className="flex-1 min-w-[100px]">
                                <Input
                                    type="time"
                                    value={slot.startTime}
                                    onChange={(e) => handleSlotChange(index, 'startTime', e.target.value)}
                                    className="text-sm"
                                />
                            </div>

                            {/* End Time */}
                            <div className="flex-1 min-w-[100px]">
                                <Input
                                    type="time"
                                    value={slot.endTime}
                                    onChange={(e) => handleSlotChange(index, 'endTime', e.target.value)}
                                    className="text-sm"
                                />
                            </div>

                            {/* Available Switch */}
                            <div className="flex items-center gap-2">
                                <Switch
                                    checked={slot.isAvailable}
                                    onCheckedChange={(checked) => handleSlotChange(index, 'isAvailable', checked)}
                                />
                                <span className="text-sm text-slate-500">
                                    {slot.isAvailable ? 'Available' : 'Unavailable'}
                                </span>
                            </div>

                            {/* Remove Button */}
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRemoveSlot(index)}
                                className="text-red-500 hover:text-red-600"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                    ))}
                </div>

                {slots.length === 0 && (
                    <div className="text-center py-8 text-slate-500">
                        <Clock className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                        <p>No availability slots set</p>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={handleAddSlot}
                            className="mt-2"
                        >
                            <Plus className="w-4 h-4 mr-1" />
                            Add your first slot
                        </Button>
                    </div>
                )}
            </Card>

            <div className="flex justify-end">
                <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Save Availability
                </Button>
            </div>
        </form>
    );
}