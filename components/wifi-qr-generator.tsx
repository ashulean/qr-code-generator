'use client';

import React, { useState } from 'react';
import { QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const WifiQRGenerator = () => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [encryption, setEncryption] = useState('WPA');
  const [showQR, setShowQR] = useState(false);

  const generateWifiString = () => {
    // Format: WIFI:T:<encryption>;S:<ssid>;P:<password>;;
    return `WIFI:T:${encryption};S:${ssid};P:${password};;`;
  };

  const handleGenerate = () => {
    if (ssid && password) {
      setShowQR(true);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <QrCode className="h-8 w-8" />
          WiFi QR Code Generator
        </CardTitle>
        <CardDescription>
          Generate a QR code to easily share WiFi credentials
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="ssid">Network Name (SSID)</Label>
          <Input
            id="ssid"
            value={ssid}
            onChange={(e) => setSsid(e.target.value)}
            placeholder="Enter network name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter network password"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="encryption">Encryption Type</Label>
          <Select value={encryption} onValueChange={setEncryption}>
            <SelectTrigger>
              <SelectValue placeholder="Select encryption type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="WPA">WPA/WPA2</SelectItem>
              <SelectItem value="WEP">WEP</SelectItem>
              <SelectItem value="nopass">None</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          className="w-full" 
          onClick={handleGenerate}
          disabled={!ssid || !password}
        >
          Generate QR Code
        </Button>

        {showQR && (
          <div className="flex justify-center p-4 bg-white rounded-lg">
            <QRCodeSVG
              value={generateWifiString()}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WifiQRGenerator;
