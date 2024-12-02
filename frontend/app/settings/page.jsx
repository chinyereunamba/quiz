"use client";
import Protected from "@/components/utils/Protected";
import React from "react";

import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Switch,
  Input,
  Select,
  SelectItem,
  Button,
  Divider,
} from "@nextui-org/react";
import { Bell, Lock, User, Globe, Eye, Moon, Volume2 } from "lucide-react";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    updates: true,
  });

  const languages = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
  ];

  return (
    <Protected>
      <div className="p-8 max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold mb-6">Settings</h1>

        {/* Profile Settings */}
        <Card>
          <CardHeader className="flex gap-3">
            <User className="w-6 h-6" />
            <div className="flex flex-col">
              <p className="text-md">Profile Settings</p>
              <p className="text-small text-default-500">
                Manage your profile information
              </p>
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <Input
              label="Display Name"
              placeholder="Enter your display name"
              defaultValue="John Doe"
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              defaultValue="john@example.com"
            />
            <Button color="primary">Update Profile</Button>
          </CardBody>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader className="flex gap-3">
            <Bell className="w-6 h-6" />
            <div className="flex flex-col">
              <p className="text-md">Notification Settings</p>
              <p className="text-small text-default-500">
                Control how you receive notifications
              </p>
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-md">Email Notifications</p>
                <p className="text-small text-default-500">
                  Receive quiz updates via email
                </p>
              </div>
              <Switch
                isSelected={notifications.email}
                onValueChange={(value) =>
                  setNotifications((prev) => ({ ...prev, email: value }))
                }
              />
            </div>
            <Divider />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-md">Push Notifications</p>
                <p className="text-small text-default-500">
                  Receive notifications on your device
                </p>
              </div>
              <Switch
                isSelected={notifications.push}
                onValueChange={(value) =>
                  setNotifications((prev) => ({ ...prev, push: value }))
                }
              />
            </div>
            <Divider />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-md">Product Updates</p>
                <p className="text-small text-default-500">
                  Receive updates about new features
                </p>
              </div>
              <Switch
                isSelected={notifications.updates}
                onValueChange={(value) =>
                  setNotifications((prev) => ({ ...prev, updates: value }))
                }
              />
            </div>
          </CardBody>
        </Card>

        {/* Appearance Settings */}
        <Card>
          <CardHeader className="flex gap-3">
            <Eye className="w-6 h-6" />
            <div className="flex flex-col">
              <p className="text-md">Appearance</p>
              <p className="text-small text-default-500">
                Customize your quiz experience
              </p>
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-md">Dark Mode</p>
                <p className="text-small text-default-500">
                  Toggle dark mode theme
                </p>
              </div>
              <Switch icon={<Moon className="w-4 h-4" />} />
            </div>
            <Divider />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-md">Sound Effects</p>
                <p className="text-small text-default-500">
                  Play sounds during quizzes
                </p>
              </div>
              <Switch icon={<Volume2 className="w-4 h-4" />} defaultSelected />
            </div>
          </CardBody>
        </Card>

        {/* Language & Region */}
        <Card>
          <CardHeader className="flex gap-3">
            <Globe className="w-6 h-6" />
            <div className="flex flex-col">
              <p className="text-md">Language & Region</p>
              <p className="text-small text-default-500">
                Set your preferred language
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <Select label="Select Language" defaultSelectedKeys={["en"]}>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </Select>
          </CardBody>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader className="flex gap-3">
            <Lock className="w-6 h-6" />
            <div className="flex flex-col">
              <p className="text-md">Security</p>
              <p className="text-small text-default-500">
                Manage your account security
              </p>
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <Input
              label="Current Password"
              type="password"
              placeholder="Enter current password"
            />
            <Input
              label="New Password"
              type="password"
              placeholder="Enter new password"
            />
            <Input
              label="Confirm New Password"
              type="password"
              placeholder="Confirm new password"
            />
            <Button color="primary">Change Password</Button>
          </CardBody>
        </Card>
      </div>
    </Protected>
  );
}
