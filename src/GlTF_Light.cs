﻿#if UNITY_EDITOR
using UnityEngine;
using System.Collections;

public class GlTF_Light : GlTF_Writer {
	public GlTF_ColorRGB color;
    public float intensity;
	public string type;
	//	public override void Write ()
	//	{
	//	}
}
#endif