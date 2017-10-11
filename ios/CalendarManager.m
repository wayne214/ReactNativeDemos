//
//  CalendarManager.m
//  ReactNativeDemos
//
//  Created by wayne on 2017/10/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSDate *)date) {
  RCTLogInfo(@"Pretending to create an event %@ at %@ in %@", name, location, date);
}


@end

