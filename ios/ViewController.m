//
//  ViewController.m
//  ReactNativeDemos
//
//  Created by wayne on 2017/9/25.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  // Do any additional setup after loading the view, typically from a nib.
  [self.DemoSelectionTableView setDataSource:self];
  [self.DemoSelectionTableView setDelegate:self];
}

- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
  // Dispose of any resources that can be recreated.
}

#pragma mark - TableViewDataSource
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
  return 2;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
  switch (indexPath.row) {
    case 0:
      return [self.DemoSelectionTableView dequeueReusableCellWithIdentifier:@"TTSDemoCell" forIndexPath:indexPath];
    case 1:
      return [self.DemoSelectionTableView dequeueReusableCellWithIdentifier:@"ASRDemoCell" forIndexPath:indexPath];
    default:
      break;
  }
  return NULL;
}

#pragma mark - TableViewDelegate
- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath{
  [tableView deselectRowAtIndexPath:indexPath animated:YES];
  
  switch (indexPath.row) {
    case 0:{
      NSString * storyboardName = @"TTSMain";
      UIStoryboard *storyboard = [UIStoryboard storyboardWithName:storyboardName bundle: nil];
      UINavigationController * vc = (UINavigationController*)[storyboard instantiateViewControllerWithIdentifier:@"TTSMain"];
      [self presentViewController:vc animated:YES completion:^{}];
      break;
    }
    case 1:{
      NSString * storyboardName = @"ASRMain";
      UIStoryboard *storyboard = [UIStoryboard storyboardWithName:storyboardName bundle: nil];
      UINavigationController * vc = (UINavigationController*)[storyboard instantiateViewControllerWithIdentifier:@"ASRMain"];
      [self presentViewController:vc animated:YES completion:^{}];
      break;
    }
    default:
      break;
  }
}

@end
