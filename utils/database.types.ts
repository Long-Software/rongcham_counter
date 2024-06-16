export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admins: {
        Row: {
          admin_token: string
          created_at: string
          email: string
          id: number
          img_url: string
          name: string
          position: string
          role_id: number
          updated_at: string
        }
        Insert: {
          admin_token?: string
          created_at?: string
          email: string
          id?: number
          img_url: string
          name: string
          position: string
          role_id: number
          updated_at?: string
        }
        Update: {
          admin_token?: string
          created_at?: string
          email?: string
          id?: number
          img_url?: string
          name?: string
          position?: string
          role_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'admins_role_id_fkey'
            columns: ['role_id']
            isOneToOne: false
            referencedRelation: 'roles'
            referencedColumns: ['id']
          }
        ]
      }
      advertisements: {
        Row: {
          business_token: string
          created_at: string
          expire_at: string
          id: number
          img_url: string
          updated_at: string
        }
        Insert: {
          business_token?: string
          created_at?: string
          expire_at: string
          id?: number
          img_url: string
          updated_at?: string
        }
        Update: {
          business_token?: string
          created_at?: string
          expire_at?: string
          id?: number
          img_url?: string
          updated_at?: string
        }
        Relationships: []
      }
      announcements: {
        Row: {
          admin_token: string
          created_at: string
          description: string
          id: number
          img_url: string
          title: string
          updated_at: string
        }
        Insert: {
          admin_token?: string
          created_at?: string
          description: string
          id?: number
          img_url: string
          title: string
          updated_at?: string
        }
        Update: {
          admin_token?: string
          created_at?: string
          description?: string
          id?: number
          img_url?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      attendees: {
        Row: {
          business_token: string
          created_at: string
          id: number
          name: string
          pin: string
          updated_at: string
        }
        Insert: {
          business_token?: string
          created_at?: string
          id?: number
          name: string
          pin: string
          updated_at?: string
        }
        Update: {
          business_token?: string
          created_at?: string
          id?: number
          name?: string
          pin?: string
          updated_at?: string
        }
        Relationships: []
      }
      businesses: {
        Row: {
          branch: string
          business_token: string
          created_at: string
          email: string
          id: number
          industry: string
          name: string
          subscription_id: number
          updated_at: string
        }
        Insert: {
          branch: string
          business_token?: string
          created_at?: string
          email: string
          id?: number
          industry: string
          name: string
          subscription_id: number
          updated_at?: string
        }
        Update: {
          branch?: string
          business_token?: string
          created_at?: string
          email?: string
          id?: number
          industry?: string
          name?: string
          subscription_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'businesses_subscription_id_fkey'
            columns: ['subscription_id']
            isOneToOne: false
            referencedRelation: 'subscriptions'
            referencedColumns: ['id']
          }
        ]
      }
      categories: {
        Row: {
          acronym: string
          business_token: string
          created_at: string
          id: number
          name: string
          status: boolean
          updated_at: string
        }
        Insert: {
          acronym: string
          business_token?: string
          created_at?: string
          id?: number
          name: string
          status?: boolean
          updated_at?: string
        }
        Update: {
          acronym?: string
          business_token?: string
          created_at?: string
          id?: number
          name?: string
          status?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      counters: {
        Row: {
          access_code: string
          attendee_id: number
          business_token: string
          counter_number: string
          created_at: string
          id: number
          main_category_id: number
          secondary_category_id: number
          status: boolean
          updated_at: string
        }
        Insert: {
          access_code: string
          attendee_id: number
          business_token?: string
          counter_number: string
          created_at?: string
          id?: number
          main_category_id: number
          secondary_category_id: number
          status?: boolean
          updated_at?: string
        }
        Update: {
          access_code?: string
          attendee_id?: number
          business_token?: string
          counter_number?: string
          created_at?: string
          id?: number
          main_category_id?: number
          secondary_category_id?: number
          status?: boolean
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'counters_attendee_id_fkey'
            columns: ['attendee_id']
            isOneToOne: false
            referencedRelation: 'attendees'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'counters_main_category_id_fkey'
            columns: ['main_category_id']
            isOneToOne: false
            referencedRelation: 'categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'counters_secondary_category_id_fkey'
            columns: ['secondary_category_id']
            isOneToOne: false
            referencedRelation: 'categories'
            referencedColumns: ['id']
          }
        ]
      }
      feedbacks: {
        Row: {
          business_token: string
          created_at: string
          description: string | null
          id: number
          queue_history_id: number
          rating: number | null
          updated_at: string
          user_token: string
        }
        Insert: {
          business_token?: string
          created_at?: string
          description?: string | null
          id?: number
          queue_history_id: number
          rating?: number | null
          updated_at?: string
          user_token?: string
        }
        Update: {
          business_token?: string
          created_at?: string
          description?: string | null
          id?: number
          queue_history_id?: number
          rating?: number | null
          updated_at?: string
          user_token?: string
        }
        Relationships: [
          {
            foreignKeyName: 'feedbacks_queue_history_id_fkey'
            columns: ['queue_history_id']
            isOneToOne: false
            referencedRelation: 'queue_histories'
            referencedColumns: ['id']
          }
        ]
      }
      notifications: {
        Row: {
          business_token: string
          created_at: string
          description: string
          id: number
          type: string
          updated_at: string
          user_token: string
        }
        Insert: {
          business_token?: string
          created_at?: string
          description: string
          id?: number
          type: string
          updated_at?: string
          user_token?: string
        }
        Update: {
          business_token?: string
          created_at?: string
          description?: string
          id?: number
          type?: string
          updated_at?: string
          user_token?: string
        }
        Relationships: []
      }
      permissions: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      queue_histories: {
        Row: {
          attendee_id: number
          business_token: string
          counter_id: number
          created_at: string
          id: number
          queue_id: number
          status: string
          updated_at: string
        }
        Insert: {
          attendee_id: number
          business_token?: string
          counter_id: number
          created_at?: string
          id?: number
          queue_id: number
          status: string
          updated_at?: string
        }
        Update: {
          attendee_id?: number
          business_token?: string
          counter_id?: number
          created_at?: string
          id?: number
          queue_id?: number
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'queue_histories_attendee_id_fkey'
            columns: ['attendee_id']
            isOneToOne: false
            referencedRelation: 'attendees'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'queue_histories_counter_id_fkey'
            columns: ['counter_id']
            isOneToOne: false
            referencedRelation: 'counters'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'queue_histories_queue_id_fkey'
            columns: ['queue_id']
            isOneToOne: false
            referencedRelation: 'queues'
            referencedColumns: ['id']
          }
        ]
      }
      queues: {
        Row: {
          business_token: string
          category_id: number
          created_at: string
          end_time: string | null
          id: number
          number: number
          start_time: string | null
          updated_at: string
        }
        Insert: {
          business_token?: string
          category_id: number
          created_at: string
          end_time?: string | null
          id?: number
          number: number
          start_time?: string | null
          updated_at: string
        }
        Update: {
          business_token?: string
          category_id?: number
          created_at?: string
          end_time?: string | null
          id?: number
          number?: number
          start_time?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'queues_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'categories'
            referencedColumns: ['id']
          }
        ]
      }
      role_has_permissions: {
        Row: {
          created_at: string
          id: number
          permission_id: number
          role_id: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          permission_id: number
          role_id: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          permission_id?: number
          role_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'role_has_permissions_permission_id_fkey'
            columns: ['permission_id']
            isOneToOne: false
            referencedRelation: 'permissions'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'role_has_permissions_role_id_fkey'
            columns: ['role_id']
            isOneToOne: false
            referencedRelation: 'roles'
            referencedColumns: ['id']
          }
        ]
      }
      roles: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          category_limit: number
          counter_limit: number
          created_at: string
          description: string
          id: number
          name: string
          price: number
          updated_at: string
        }
        Insert: {
          category_limit: number
          counter_limit: number
          created_at?: string
          description: string
          id?: number
          name: string
          price: number
          updated_at?: string
        }
        Update: {
          category_limit?: number
          counter_limit?: number
          created_at?: string
          description?: string
          id?: number
          name?: string
          price?: number
          updated_at?: string
        }
        Relationships: []
      }
      support_responses: {
        Row: {
          admin_token: string
          created_at: string
          description: string
          id: number
          support_id: number
          updated_at: string
        }
        Insert: {
          admin_token?: string
          created_at?: string
          description: string
          id?: number
          support_id: number
          updated_at?: string
        }
        Update: {
          admin_token?: string
          created_at?: string
          description?: string
          id?: number
          support_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'support_responses_support_id_fkey'
            columns: ['support_id']
            isOneToOne: false
            referencedRelation: 'supports'
            referencedColumns: ['id']
          }
        ]
      }
      support_types: {
        Row: {
          created_at: string
          id: number
          name: string
          support_types: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          support_types?: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          support_types?: string
        }
        Relationships: []
      }
      supports: {
        Row: {
          businesses_token: string
          created_at: string
          description: string
          id: number
          status: string
          support_type_id: number
          updated_at: string
        }
        Insert: {
          businesses_token?: string
          created_at?: string
          description: string
          id?: number
          status: string
          support_type_id: number
          updated_at?: string
        }
        Update: {
          businesses_token?: string
          created_at?: string
          description?: string
          id?: number
          status?: string
          support_type_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'supports_support_type_id_fkey'
            columns: ['support_type_id']
            isOneToOne: false
            referencedRelation: 'support_types'
            referencedColumns: ['id']
          }
        ]
      }
      user_queues: {
        Row: {
          created_at: string
          id: number
          queue_id: number
          updated_at: string
          user_token: string
        }
        Insert: {
          created_at?: string
          id?: number
          queue_id: number
          updated_at?: string
          user_token?: string
        }
        Update: {
          created_at?: string
          id?: number
          queue_id?: number
          updated_at?: string
          user_token?: string
        }
        Relationships: [
          {
            foreignKeyName: 'user_queues_queue_id_fkey'
            columns: ['queue_id']
            isOneToOne: false
            referencedRelation: 'queues'
            referencedColumns: ['id']
          }
        ]
      }
      users: {
        Row: {
          created_at: string
          dob: string | null
          firstname: string | null
          gender: string | null
          id: number
          img_url: string | null
          lastname: string | null
          phone_number: string
          updated_at: string
          user_token: string
        }
        Insert: {
          created_at?: string
          dob?: string | null
          firstname?: string | null
          gender?: string | null
          id?: number
          img_url?: string | null
          lastname?: string | null
          phone_number: string
          updated_at?: string
          user_token?: string
        }
        Update: {
          created_at?: string
          dob?: string | null
          firstname?: string | null
          gender?: string | null
          id?: number
          img_url?: string | null
          lastname?: string | null
          phone_number?: string
          updated_at?: string
          user_token?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never
