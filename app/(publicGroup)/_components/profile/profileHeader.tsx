'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Mail, Phone, Calendar, Shield } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { NavbarProps} from '@/lib/types'

export function ProfileHeader(
 { user }: NavbarProps) {
  return (
    <Card className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 border-0">
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {user.data.name}
            </h1>
            <Badge
              variant={user.data.role === 'CUSTOMER' ? 'default' : 'secondary'}
              className="text-xs sm:text-sm"
            >
              {user.data.role}
            </Badge>
            {user.data.isBan && (
              <Badge variant="destructive" className="text-xs sm:text-sm">
                Banned
              </Badge>
            )}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
            Member since {formatDistanceToNow(new Date(user.data.createdAt), { addSuffix: true })}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>{user.data.email}</span>
            </div>

            {user.data.phone && (
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>{user.data.phone}</span>
              </div>
            )}

            {user.data.address && (
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>{user.data.address}</span>
              </div>
            )}

            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>
                {new Date(user.data.createdAt).toLocaleDateString('en-US', {
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
              user.data.isBan
                ? 'text-red-500 dark:text-red-400'
                : 'text-green-500 dark:text-green-400'
            }`}
          />
        </div>
      </div>
    </Card>
  )
}
