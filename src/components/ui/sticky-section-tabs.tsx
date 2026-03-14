"use client" 

import React, { Children, isValidElement } from 'react';
import clsx from 'clsx';

interface StickyTabItemProps {
  title: string;
  id: string | number;
  children: React.ReactNode;
}

const StickyTabItem: React.FC<StickyTabItemProps> = () => {
  return null;
};

interface StickyTabsProps {
  children: React.ReactNode;
  mainNavHeight?: string;
  rootClassName?: string;
  navSpacerClassName?: string;
  sectionClassName?: string;
  stickyHeaderContainerClassName?: string;
  headerContentWrapperClassName?: string;
  headerContentLayoutClassName?: string;
  titleClassName?: string;
  contentLayoutClassName?: string;
}

const StickyTabs: React.FC<StickyTabsProps> & { Item: React.FC<StickyTabItemProps> } = ({
  children,
  mainNavHeight = '96px',
  rootClassName = "bg-white text-slate-900 font-sans",
  navSpacerClassName = "bg-white",
  sectionClassName = "bg-white",
  stickyHeaderContainerClassName = "shadow-none",
  headerContentWrapperClassName = "border-b border-t border-slate-100 bg-white/90 backdrop-blur-xl",
  headerContentLayoutClassName = "mx-auto max-w-[1400px] px-6 py-6",
  titleClassName = "text-3xl font-black tracking-tight text-slate-900 md:text-3xl lg:text-4xl uppercase",
  contentLayoutClassName = "mx-auto max-w-[1400px] px-6 py-24",
}) => {
  const stickyTopValue = `calc(${mainNavHeight} - 1px)`;
  const navHeightStyle = { height: mainNavHeight };
  const stickyHeaderStyle = { top: stickyTopValue };

  return (
    <div className={clsx("overflow-visible", rootClassName)}>

      <div
        className={clsx(
          "sticky left-0 top-0 z-20 w-full",
          navSpacerClassName
        )}
        style={navHeightStyle}
        aria-hidden="true"
      />

      {Children.map(children, (child) => {
        if (!isValidElement(child) || child.type !== StickyTabItem) {
          if (process.env.NODE_ENV === 'development' && child != null) {
            console.warn('StickyTabs component expects <StickyTabs.Item> components as direct children.');
          }
          return null;
        }

        const itemElement = child as React.ReactElement<StickyTabItemProps>;
        const { title, id, children: itemContent } = itemElement.props;

        return (
          <section
            key={id}
            id={String(id)}
            className={clsx(
              "relative overflow-visible",
              sectionClassName
            )}
          >
            <div
              className={clsx(
                "sticky z-10 -mt-px flex flex-col",
                stickyHeaderContainerClassName
              )}
              style={stickyHeaderStyle}
            >
              <div className={clsx(headerContentWrapperClassName)}>
                <div className={clsx(headerContentLayoutClassName)}>
                  <div className="flex items-center justify-between">
                    <h2 className={clsx(titleClassName)}>
                      {title}
                    </h2>
                    <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                      Engineering Phase 0{id}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={clsx(contentLayoutClassName)}>
              {itemContent}
            </div>

          </section>
        );
      })}
    </div>
  );
};

StickyTabs.Item = StickyTabItem;

export default StickyTabs;
