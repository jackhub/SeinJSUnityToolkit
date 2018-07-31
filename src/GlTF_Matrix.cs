﻿#if UNITY_EDITOR
using UnityEngine;
using System.Collections;

public class GlTF_Matrix : GlTF_FloatArray {
	public GlTF_Matrix() { name = "matrix"; minItems = 16; maxItems = 16; items = new float[] { 1.0f, 0.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f, 0.0f, 0.0f, 0.0f, 1.0f }; }
    public GlTF_Matrix(Matrix4x4 m, bool convertLeftRight=true, bool isLight = false)
	{
		name = "matrix";
		minItems = 16;
		maxItems = 16;

        if (convertRightHanded && isLight) {
            m.m00 *= -1;
            m.m10 *= -1;
            m.m21 *= -1;
            m.m22 *= -1;
            m.m23 *= -1;
        } else {
            // unity: m[row][col]
            // gltf: column major
            if (convertRightHanded && convertLeftRight)
                convertMatrixLeftToRightHandedness(ref m);   
        }

		items = new float[] {
			m.m00, m.m10, m.m20, m.m30,
			m.m01, m.m11, m.m21, m.m31,
			m.m02, m.m12, m.m22, m.m32,
			m.m03, m.m13, m.m23, m.m33
		};
	}
}
#endif