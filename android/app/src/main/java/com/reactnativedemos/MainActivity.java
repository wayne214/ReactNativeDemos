package com.reactnativedemos;

import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.microsoft.codepush.react.CodePush;
import com.umeng.analytics.MobclickAgent;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeDemos";
    }

    @Override
    protected void onResume() {
        super.onResume();
        MobclickAgent.onResume(this);
    }

    @Override
    protected void onPause() {
        super.onPause();
        MobclickAgent.onPause(this);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        startActivity(new Intent("com.android.settings.TTS_SETTINGS"));
    }
}
