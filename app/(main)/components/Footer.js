"use client";

import React from "react";
import { Divider, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import ThemeSwitch from "./theme-switch";

const footerNavigation = {
  services: [{ name: "공생마케팅", href: "#" }],

  supportOptions: [{ name: "체험단시대", href: "#" }],

  aboutUs: [{ name: "박초아", href: "#" }],
  
  companyId: [{ name: "535 25 02263", href: "#" }],

  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => <Icon {...props} icon="fontisto:facebook" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => <Icon {...props} icon="fontisto:instagram" />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => <Icon {...props} icon="fontisto:twitter" />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => <Icon {...props} icon="fontisto:github" />,
    },
  ],
};

export default function Component() {
  const renderList = React.useCallback(
    ({ title, items }) => (
      <div className="text-foreground ">
        <h3 className="text-small font-semibold text-default-600">{title}</h3>
        <ul className="mt-2 md:space-y-4">
          {items.map((item) => (
            <li key={item.name} style={{ wordBreak: "break-all" }}>
                {item.name}
            </li>
          ))}
        </ul>
      </div>
    ),

    []
  );

  return (
    <footer className="flex w-full flex-col ">
      <div className="max-w-7xl px-6 pb-8 lg:px-8 md:pt-10">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="mt-10 grid grid-cols-2 md:gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {renderList({
                  title: "회사명",
                  items: footerNavigation.services,
                })}
              </div>
              <div className="mt-2">
                {renderList({
                  title: "대표자명",
                  items: footerNavigation.aboutUs,
                })}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                {renderList({
                  title: "사업자번호",
                  items: footerNavigation.companyId,
                })}
              </div>
            </div>
            
          </div>
        </div>
        <Divider className="mt-5 md:mt-16 sm:mt-5 lg:mt-10" />
        <div className="flex flex-wrap justify-between gap-2 pt-8">
          <p className="text-small text-default-400">
            &copy; 2024 공생마케팅. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
