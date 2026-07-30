'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Mail, Phone, Calendar, Shield } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface ProfileHeaderProps {
  name: string
  email: string
  role: string
  phone?: string | null
  address?: string | null
  createdAt: string
  isBan: boolean
}

export function ProfileHeader({
  name,
  email,
  role,
  phone,
  address,
  createdAt,
  isBan,
}: ProfileHeaderProps) {
  return (
    <Card className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border-0">
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {name}
            </h1>
            <Badge
              variant={role === 'CUSTOMER' ? 'default' : 'secondary'}
              className="text-xs sm:text-sm"
            >
              {role}
            </Badge>
            {isBan && (
              <Badge variant="destructive" className="text-xs sm:text-sm">
                Banned
              </Badge>
            )}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
            Member since {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>{email}</span>
            </div>

            {phone && (
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>{phone}</span>
              </div>
            )}

            {address && (
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>{address}</span>
              </div>
            )}

            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>
                {new Date(createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Shield
            className={`w-12 h-12 sm:w-16 sm:h-16 ${
              isBan
                ? 'text-red-500 dark:text-red-400'
                : 'text-green-500 dark:text-green-400'
            }`}
          />
        </div>
      </div>
    </Card>
  )
}
