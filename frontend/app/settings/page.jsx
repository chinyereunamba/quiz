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
import {
  Bell,
  Lock,
  User,
  Globe,
  Eye,
  Moon,
  Volume2,
  EyeClosed,
} from "lucide-react";

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    updates: true,
  });

  const [showCurrentP, setShowCurrentP] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const languages = [
    { label: "English", value: "en" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
  ];

  return (
    <Protected>
      <div className="max-w-4xl space-y-6">
        {/* Profile Settings */}
        <div>
          <div className="flex gap-3 items-center pb-2">
            <span>
              <User className="w-6 h-6" />
            </span>
            <div className="flex flex-col">
              <p className="text-md font-bold">Profile Settings</p>
              <p className="text-small text-default-500">
                Manage your profile information
              </p>
            </div>
          </div>
          <div className="my-4 flex flex-col gap-4">
            <Input type="text" label="Display Name" />
            <Input label="Email" type="email" />
            <Button color="primary" className="w-fit rounded-md">
              Update Profile
            </Button>
          </div>
        </div>

        {/* Notification Settings */}
        <div>
          <div className="flex items-center gap-3 pb-2">
            <Bell className="w-6 h-6" />
            <div className="flex flex-col">
              <p className="text-md  font-bold">Notification Settings</p>
              <p className="text-small text-default-500">
                Control how you receive notifications
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between items-center py-2">
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
            <div className="flex justify-between items-center py-2">
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
            <div className="flex justify-between items-center py-2">
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
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="my-2">
          <div className="flex gap-3 items-center pb-2">
            <Eye className="w-6 h-6" />
            <div className="flex flex-col">
              <p className="text-md font-bold">Appearance</p>
              <p className="text-small text-default-500">
                Customize your quiz experience
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-md">Dark Mode</p>
                <p className="text-small text-default-500">
                  Toggle dark mode theme
                </p>
              </div>
              <Switch icon={<Moon className="w-4 h-4" />} />
            </div>
            <Divider />
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-md">Sound Effects</p>
                <p className="text-small text-default-500">
                  Play sounds during quizzes
                </p>
              </div>
              <Switch icon={<Volume2 className="w-4 h-4" />} defaultSelected />
            </div>
          </div>
        </div>

        {/* Language & Region */}
        <div>
          <div className="flex gap-3 items-center pb-2">
            <Globe className="w-6 h-6" />
            <div className="flex flex-col">
              <p className="text-md  font-bold">Language & Region</p>
              <p className="text-small text-default-500">
                Set your preferred language
              </p>
            </div>
          </div>
          <div className="py-2">
            <Select label="Select Language" defaultSelectedKeys={["en"]}>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        {/* Security Settings */}
        <div>
          <div className="flex gap-3 items-center pb-2">
            <Lock className="w-6 h-6" />
            <div className="flex flex-col">
              <p className="text-md  font-bold">Security</p>
              <p className="text-small text-default-500">
                Manage your account security
              </p>
            </div>
          </div>
          <div className="space-y-4 mt-3">
            <Input
              label="Current Password"
              type={showCurrentP ? "text" : "password"}
              endContent={
                <span
                  className="cursor-pointer"
                  onClick={() => setShowCurrentP(!showCurrentP)}
                >
                  {showCurrentP ? <Eye /> : <EyeClosed />}
                </span>
              }
            />
            <Input
              label="New Password"
              type={showPassword ? "text" : "password"}
              endContent={
                <span
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </span>
              }
            />
            <Input
              label="Confirm New Password"
              type={showPassword ? "text" : "password"}
              endContent={
                <span
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </span>
              }
            />
            <Button color="primary" className="rounded-md">Change Password</Button>
          </div>
        </div>
      </div>
    </Protected>
  );
}
