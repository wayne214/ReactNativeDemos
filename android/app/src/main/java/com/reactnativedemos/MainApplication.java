package com.reactnativedemos;

import android.app.Application;
import android.content.Context;

import com.facebook.react.ReactApplication;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.RNFetchBlob.RNFetchBlobPackage;

import org.wonday.pdf.RCTPdfView;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.microsoft.codepush.react.CodePush;
import com.taobao.sophix.PatchStatus;
import com.taobao.sophix.SophixManager;
import com.taobao.sophix.listener.PatchLoadStatusListener;

import java.util.Arrays;
import java.util.List;

import voicetest.VoiceReactPackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }

        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new VoiceReactPackage(),
                    new MainReactPackage(),
                    new RCTCameraPackage(),
                    new RNFetchBlobPackage(),
                    new RCTPdfView(),
                    new CodePush("p19Zz1OLcDQbWXaVG9EeV6XpyW5jddab8bab-41f9-4d9e-b03c-c8c94c366a1b", MainApplication.this, BuildConfig.DEBUG)
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        initHotFix();
    }

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        String appVersion;
        try {
            appVersion = this.getPackageManager().getPackageInfo(this.getPackageName(), 0).versionName;
        } catch (Exception e) {
            appVersion = "1.0.0";
        }

        SophixManager.getInstance().setContext(this)
                .setAesKey(null)
                .setAppVersion(appVersion)
                .setEnableDebug(true)
                .setSecretMetaData("24629776-1", "246332f071d72a25018d763766587bf6", "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMUNnMW8ciX85JL9mxjpwtu4ZjJS999TC4f6U+T0QICInpb5OAGFgAonj4E7K5WiKGaNIUikF4I1pDuu+2P5l477TGT/ZVu4wV+E1IIoQ7hrEx0n+LgAdMbe43+kak3Bx7R3XPAqbGcJZMgIAaNrF9bLBkaWJ7N7LkfLldwctdYzI1fzLDFkl3TnelkZ1HZU3oEUWN+BT+gIsJl8IANzE+bRN1laylb2cuSu52Cx5px3EUhWTmxUcqEHFTyAeZOJkQvJmn7uVKxPZB7C/8Mfr7VhUM3JFyN+ZYRiIrctGwHOrUu4x3kVJihQOtdnHSxb/9fP+0zSPEdCicPGs6d/ALAgMBAAECggEAfL1v+8Cc13O+shgwxKLY32L6LVXqpPApirsD3ALw+iacbJTebPpv4BNR38PG/jr1kTI18KxoRDzxQyDCcXZq8NcIe3seXkFeyZsLM9s++EjHri9iB31m91a2dh6rOsPX77w1ROnNgKIEYTii/V4fBwBwwR1GLwxWgAFV+tPyoVRyF/2i9ea5sUcTu/TXG8Vun9vOlHucyet4DK4z5UkKmbMTM0PvfXz2Tf+E6Q6ZFfzkRGc7EVX8WxGAucm9vKONqY7tAzxNpkIIkKP9tF4/dIkIoNFotxiUxzwHxrAicV1wxyKLKfe53SoFXd5V2P5C1LuklCVx41djBnnlrb1ZIQKBgQD8aXwLLinzhqtSkSAvLLyqAFFOzWTRgHZM7xEr2df4XOGwoLs/nKpgSsna5V9faPZaUlbfMcURCcPeTPvb3kZC2CUSfdFDRDQXDR2dA7ZgWHSykTNMK525I1zCttQGSlbjCSnfpBadffWaEM5tBp/uRF4SlvltJa8Rhq11Iby0tQKBgQDPOFiqT23i+rCtPLjDCog5nLKWzgXVE8dvHKk8Ho9wWP+r/CSZtZd5UZCrTF49JN0aVUojyYTllJQoSRdqUFiqcDNEM3/tZ3xuYNJ5h5He2Pq9P0agw95N3Rlj8UFmoYhJvjBIF2iQD0zUqlMUYzFjWZGfZNu8gFupBnqJo3/JvwKBgCqwfHY3nIi/YgJY4SSZYF8wJpA5VK/KFjf0xuavtUMgEluZE5IyoO4gN/t5h6PPULr96gtdk4LKMAJM6tvIwAFWJQ73kIjb5CNx6GxB0HqC+1moDRD433gMbwfPfBSERiWnyxkz209PmlYwOXlfAXV+wppKRm0bTnycVoHU7uFxAoGBAMxKzcciRcCnzDUOj0zifkjmPn9EoCVguZbGl+YIbvuhEncZP3A2wh4+FrV6tdHsHPtQKKa9jwLUB3jsDmSmz7NAqJpNd4qzIs6jL/3WdS5RlmmrD1OBpxH2r4iDmim3iOjC01DPmyujmehz/zIzVMaQ0GtngOcHWNZ756T4hwx7AoGATY/VatbowXCmzlWOVMdtLCf2p+tAk0DbG7OrsNSZLoJs47BoC3VfclHP5dhV7VwtMsRRLEqwUOmlU/2wITlrKZC/XBSvmkCDCs7z0+P139Bi2MoKs1oMEeEUxCxC+2qBQH5ZKKHTDd9IGuk0etAbSQaFNhSiHKVV1XohDsUqKWY=")
                .setPatchLoadStatusStub(new PatchLoadStatusListener() {
                    @Override
                    public void onLoad(final int mode, final int code, final String info, final int handlePatchVersion) {
                        // 补丁加载回调通知
                        if (code == PatchStatus.CODE_LOAD_SUCCESS) {
                            // 表明补丁加载成功
                        } else if (code == PatchStatus.CODE_LOAD_RELAUNCH) {
                            // 表明新补丁生效需要重启. 开发者可提示用户或者强制重启;
                            // 建议: 用户可以监听进入后台事件, 然后调用killProcessSafely自杀，以此加快应用补丁，详见1.3.2.3
                            // 建议调用killProcessSafely，详见1.3.2.3
                            // SophixManager.getInstance().killProcessSafely();
                        } else if (code == PatchStatus.CODE_LOAD_FAIL) {
                            // 内部引擎异常，推荐此时清空本地补丁，防止失败补丁重复加载
                            // SophixManager.getInstance().cleanPatches();
                        } else {
                            // 其它错误信息, 查看PatchStatus类说明
                        }
                    }
                }).initialize();

    }

    private void initHotFix() {
        SophixManager.getInstance().queryAndLoadNewPatch();
    }
}
