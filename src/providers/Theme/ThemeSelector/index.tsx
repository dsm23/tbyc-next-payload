"use client";

import { useEffect, useState } from "react";
import type { FunctionComponent } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useTheme } from "..";
import { themeLocalStorageKey } from "./types";
import type { Theme } from "./types";

export const ThemeSelector: FunctionComponent = () => {
  const { setTheme } = useTheme();
  const [value, setValue] = useState("");

  const onThemeChange = (themeToSet: Theme & "auto") => {
    if (themeToSet === "auto") {
      setTheme(null);
      setValue("auto");
    } else {
      setTheme(themeToSet);
      setValue(themeToSet);
    }
  };

  useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey);
    setValue(preference ?? "auto");
  }, []);

  return (
    <Select onValueChange={onThemeChange} value={value}>
      <SelectTrigger
        className="w-auto gap-2 border-none bg-transparent pl-0 md:pl-3"
        aria-label="Theme switcher"
      >
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="auto">Auto</SelectItem>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
      </SelectContent>
    </Select>
  );
};
