package com.reactnativedemos;

import android.app.Application;
import android.content.Context;

import com.facebook.react.ReactApplication;
import com.react.arron.speech.speechModulePackage;
import com.BV.LinearGradient.LinearGradientPackage;
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
                    new speechModulePackage(),
                    new LinearGradientPackage(),
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
                .setSecretMetaData("24687718-1", "eb6a7d9f0a8d36867f22c457ae4fb02d", "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCe9NyUJ0WjmNH9VV8AKClCe8nNTyYAB7H742JEKPhs1XLnf1i9uhjAhP2F7SVgCWSEz7xFHpJ4A/AEX8tywyeXfF6QdqpYHzB8OcO8MD/ka/iIaODleNkqxv5XzBCI00X6N7bXSZWpBz2AiZwWLGXrhg+rrBLQGcFri1+2VPHFwHDu2DxA1vC3rhDF8Pdib2XeaiGIcx94O9lCVu2p9W1QC4gV/8JY25PVwmNi4o6q47HvDNS66cC1vp0r4SRT1J8fg118QSPC6H60pAJgIrcjBc++uU/aXVf5BapFNpHZixfxaLUaKXBMytLh+VeCLyFRQYGBaViSaQaKOzSbsfivAgMBAAECggEALhJEeIBlc8RQYL/EuDPruYRNej9NgUa5tIs0KRNC5bB8DFLhsqPklrA1FwMkCRDP3JqlM9dnlnd1sp7dRdcAe6ylb/Ok7cOkduz7KWlGq3sL3uWfAYOkVfy1LVdNF4s8xggt63o9cW9SyRWZcufNZpVFp3lJPp2obPZJeHxoUus9f9LWWfGunVmPAy0Xy+V2IxWKFe00LmBaFRA1ExdvOqZfLWOMYirK7M6FpVuwDFuSQ3fdBhjolllmO+yvZCLv7tQS3Y4iaa4jNTsGtB9kGmGiSD16VKdU55u83RXkR5OsjWMji1Z4qZegirtBEfc0Re97dIhcURFLoOaQUI3OQQKBgQDfv3flxNx4UbT1EuMOBmQLpNEEYkGRzAHu2C3K53T044Mi8xLx+IBPUqq+0woEVutyGN0LobWSM3PcBuQm9nxVdSIFYDfSEI4DbTz3wxbx/aNzRKlcImcno3tBBWDdWsf4KnnhnkneuUOZeQtQAg9g5PfcSn1IQZ6Fb5BPmavMoQKBgQC13oWZmpWxipagDKZJFqWIETKeAx81nkGzB/mj4Y9bwbpNt1p+p4Ac9jjpePvmLLqp3IvUEcde6mrSigqmv7X0HYCu0ER1KGShpMUE4jW4wAMU7YnYi/aLj/Svq5aqyQW6E7r3di+K5AYY24eJoje850+mpJa9zV3GLB4z7dHzTwKBgQCNEAOhQrnUyX6Su/OWVgUhKin035WDO+FEGdrU/5PHCOEWWbVqBEewuueXIyo/jiUma/KAcNUudW3oHBgfUGsW3aAzT3Qh5foCww4bDk4bBtPTykgUJERwwyrj1WY6aA+GsBDjY44i8x5hVeUB7iqP5gs2QWg289fjPHD5HmMnwQKBgAWDmKNel3lJjWWO3J/MqvokI1e9Gn4irTVDYaNBXHpYtlBS5dB/PZgjMviJLYH+Cy7JPAgS/et3ygNWIhqKJ3ceSd+C+wBeWCa6eyq5vQ077Rv+U7aYD8KNe8qzth65d437uSh1kd1xKmoohcR7gZsdnEGeLd/VUSmH/uZuKHZrAoGBAKDmKcDyDikbEf5KRe93uH6kzQeRRGr9dcLFvkdbZN0sj1jw6IQuP709T14y62VTEsT1u4ZbYxZHc0nc94iKbRoGnDWbU4dQPuM9KdMtmu8e+5GBZSnFL0N13kgGXJMYmC75iuFVlJOjGTXV7flnNQBZxlKiO0EW0nMVVZdkytB/")
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
